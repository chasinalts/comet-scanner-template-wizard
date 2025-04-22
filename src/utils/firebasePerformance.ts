import { getPerformance, trace } from 'firebase/performance';
import { app } from '../firebaseConfig';

// Initialize Firebase Performance
const perf = getPerformance(app);

// Sanitize attribute values to ensure they're valid for Firebase Performance
const sanitizeAttributeValue = (value: string): string => {
  // Replace invalid characters with underscores
  // Firebase Performance has restrictions on attribute values
  return value.replace(/[^a-zA-Z0-9_.-]/g, '_').substring(0, 40);
};

// Create a custom trace
export const startTrace = (traceName: string) => {
  try {
    const customTrace = trace(perf, traceName);
    customTrace.start();
    return customTrace;
  } catch (error) {
    console.error('Error starting Firebase Performance trace:', error);
    return null;
  }
};

// Stop a trace
export const stopTrace = (customTrace: any) => {
  if (!customTrace) return;
  
  try {
    customTrace.stop();
  } catch (error) {
    console.error('Error stopping Firebase Performance trace:', error);
  }
};

// Add a custom attribute to a trace
export const putTraceAttribute = (customTrace: any, name: string, value: string) => {
  if (!customTrace) return;
  
  try {
    // Sanitize the attribute value before setting it
    const sanitizedValue = sanitizeAttributeValue(value);
    customTrace.putAttribute(name, sanitizedValue);
  } catch (error) {
    console.error('Error adding attribute to Firebase Performance trace:', error);
  }
};

// Record a performance metric
export const recordPerformanceMetric = (metricName: string, value: number) => {
  try {
    const customTrace = trace(perf, 'custom_metric');
    customTrace.start();
    
    // Add the metric name and value as attributes
    customTrace.putAttribute('metric_name', sanitizeAttributeValue(metricName));
    customTrace.putAttribute('metric_value', String(value));
    
    // Stop the trace
    customTrace.stop();
  } catch (error) {
    console.error('Error recording performance metric:', error);
  }
};

export default {
  startTrace,
  stopTrace,
  putTraceAttribute,
  recordPerformanceMetric
};
