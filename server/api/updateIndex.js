

import { exec } from 'child_process';

export default defineEventHandler(async (event) => {
  console.log('API endpoint was hit at ' + new Date().toISOString());

  exec('node index-supabase.js', (error, stdout, stderr) => {
    if (error) {
      console.log('Error executing script:', error);
      return;
    }
    console.log('Script stdout:', stdout);
    console.error('Script stderr:', stderr);
  });

  return { message: 'Script execution initiated' };
});



// export default defineEventHandler(async (event) => {
//   // Log a simple message to the console
//   console.log('API endpoint was hit at ' + new Date().toISOString());
//
//   // Return a response directly
//   return { message: 'API endpoint was hit successfully' };
// });

