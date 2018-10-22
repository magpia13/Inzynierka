export const ERROR_RECEIVED = 'ERROR_RECEIVED';

export default (error) => {
	console.log(error);
  return {
    type: ERROR_RECEIVED,
    error: error,
  }; 
} 