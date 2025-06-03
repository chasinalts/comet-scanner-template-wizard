import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSession, ChecklistItem } from '../contexts/SessionContext';
import Button from './ui/Button';

const statusIcons = {
  'completed': '✓',
  'in-progress': '⏳',
  'not-started': '○',
  'cancelled': '✗'
};

const statusColors = {
  'completed': 'text-green-500',
  'in-progress': 'text-yellow-500',
  'not-started': 'text-gray-400',
  'cancelled': 'text-red-500'
};

const statusBgColors = {
  'completed': 'bg-green-100 dark:bg-green-900/20',
  'in-progress': 'bg-yellow-100 dark:bg-yellow-900/20',
  'not-started': 'bg-gray-100 dark:bg-gray-800',
  'cancelled': 'bg-red-100 dark:bg-red-900/20'
};

const Checklist = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getChecklist } = useSession();
  const checklist = getChecklist();

  const completedCount = checklist.filter(item => item.status === 'completed').length;
  const totalCount = checklist.length;
  const progressPercentage = (completedCount / totalCount) * 100;

  return (
    <>
      {/* Toggle Tab */}
      <motion.div
        className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50"
        initial={{ x: -40 }}
        animate={{ x: isOpen ? 0 : -40 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-6 rounded-r-lg shadow-lg transition-colors duration-200 flex flex-col items-center gap-1 text-sm font-medium"
        >
          <span className="transform -rotate-90 whitespace-nowrap">Checklist</span>
          <div className="w-8 h-1 bg-white/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <span className="text-xs">{completedCount}/{totalCount}</span>
        </button>
      </motion.div>

      {/* Slide-out Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 z-40"
            />
            
            {/* Panel */}
            <motion.div
              initial={{ x: -400 }}
              animate={{ x: 0 }}
              exit={{ x: -400 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 h-full w-96 bg-white dark:bg-gray-900 shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Progress Checklist
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-xl"
                  >
                    ×
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <span>Overall Progress</span>
                    <span>{completedCount} of {totalCount} completed</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercentage}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                  <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {Math.round(progressPercentage)}% Complete
                  </div>
                </div>

                {/* Checklist Items */}
                <div className="space-y-3">
                  {checklist.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        statusBgColors[item.status]
                      } ${
                        item.status === 'completed' 
                          ? 'border-green-300 dark:border-green-600' 
                          : item.status === 'in-progress'
                          ? 'border-yellow-300 dark:border-yellow-600'
                          : 'border-gray-200 dark:border-gray-700'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`text-xl ${statusColors[item.status]} flex-shrink-0 mt-0.5`}>
                          {statusIcons[item.status]}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            {item.title}
                          </h3>
                          {item.description && (
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {item.description}
                            </p>
                          )}
                          <div className="mt-2">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              item.status === 'completed' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                : item.status === 'in-progress'
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                                : item.status === 'cancelled'
                                ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                                : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400'
                            }`}>
                              {item.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Summary */}
                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Summary
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Completed:</span>
                      <span className="font-medium text-green-600 dark:text-green-400">
                        {checklist.filter(item => item.status === 'completed').length}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">In Progress:</span>
                      <span className="font-medium text-yellow-600 dark:text-yellow-400">
                        {checklist.filter(item => item.status === 'in-progress').length}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Not Started:</span>
                      <span className="font-medium text-gray-600 dark:text-gray-400">
                        {checklist.filter(item => item.status === 'not-started').length}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Cancelled:</span>
                      <span className="font-medium text-red-600 dark:text-red-400">
                        {checklist.filter(item => item.status === 'cancelled').length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Checklist;