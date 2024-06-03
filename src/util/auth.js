import { redirect } from 'react-router-dom';

export default function getAuthToken() {
  const token = localStorage.getItem('token');
  return token;
}
export function tokenLoader() {
    const token = getAuthToken();
    return token;
  }

  export function checkAuthLoader() {

    const token = getAuthToken();
    
    if (!token) {
      return redirect('/auth');
    }
  
    return token; // this is missing in the next lecture video and should be added by you
  }
 