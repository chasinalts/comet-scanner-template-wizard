// Supabase logging service that stores logs in Supabase
import { databaseService } from './databaseService';
import { LOGS_TABLE } from '../supabaseConfig';
import { ID } from 'appwrite';
import { LogLevel } from './loggingService';

// Interface for log entry
export interface SupabaseLogEntry {
  event: string;
  message: string;
  level?: LogLevel;
  userId?: string;
  details?: any;
}

/**
 * Log an event to Supabase
 * @param entry The log entry
 * @returns The created log entry
 */
export const logToSupabase = async (entry: SupabaseLogEntry): Promise<any> => {
  try {
    const logData = {
      event: entry.event,
      message: entry.message,
      level: entry.level || LogLevel.INFO,
      user_id: entry.userId,
      timestamp: new Date().toISOString(),
      details: entry.details ? JSON.stringify(entry.details) : null
    };
    
    return await databaseService.create(LOGS_TABLE, logData, ID.unique());
  } catch (error) {
    // Don't throw errors from logging - just console.error them
    console.error('Error logging event to Supabase:', error);
    console.error('Failed to log:', entry);
    return null;
  }
};

/**
 * Get logs with optional filtering
 * @param filters Optional filters for logs
 * @param limit Maximum number of logs to return
 * @param offset Offset for pagination
 * @returns A list of log entries
 */
export const getSupabaseLogs = async (
  filters?: {
    level?: LogLevel;
    userId?: string;
    event?: string;
    startDate?: Date;
    endDate?: Date;
  },
  limit = 100,
  offset = 0
): Promise<any[]> => {
  try {
    const queries: any[] = [];
    
    if (filters) {
      if (filters.level) {
        queries.push({ key: 'level', value: filters.level });
      }
      
      if (filters.userId) {
        queries.push({ key: 'user_id', value: filters.userId });
      }
      
      if (filters.event) {
        queries.push({ key: 'event', value: filters.event });
      }
      
      // Date filtering would need to be handled differently in a real implementation
      // as the query format differs between Appwrite and Supabase
    }
    
    // Add limit and offset
    queries.push({ key: 'limit', value: limit });
    queries.push({ key: 'offset', value: offset });
    
    return await databaseService.list(LOGS_TABLE, queries);
  } catch (error) {
    console.error('Error getting logs from Supabase:', error);
    throw error;
  }
};

// Convenience logging functions
export const logDebug = (event: string, message: string, userId?: string, details?: any) => 
  logToSupabase({ event, message, level: LogLevel.DEBUG, userId, details });

export const logInfo = (event: string, message: string, userId?: string, details?: any) => 
  logToSupabase({ event, message, level: LogLevel.INFO, userId, details });

export const logWarning = (event: string, message: string, userId?: string, details?: any) => 
  logToSupabase({ event, message, level: LogLevel.WARN, userId, details });

export const logError = (event: string, message: string, userId?: string, details?: any) => 
  logToSupabase({ event, message, level: LogLevel.ERROR, userId, details });
