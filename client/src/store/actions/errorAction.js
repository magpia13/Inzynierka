export const ERROR_RECEIVED = 'ERROR_RECEIVED';

export default (error) => {
  return {
    type: ERROR_RECEIVED,
    error: error,
  }; 
} 