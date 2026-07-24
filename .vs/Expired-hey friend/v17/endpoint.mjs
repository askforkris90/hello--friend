import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://uhwtfducivbbwgrgfurm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVod3RmZHVjaXZiYndncmdmdXJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0NDY5NTEsImV4cCI6MjA0MjAyMjk1MX0.trVnMR9_Ousr1AV3GH94nSRtTwjnhfzvuJ_pq9fG68g');

async function storeFeedback(name, email, message) {
    const { data, error } = await supabase
        .from('feedback')  // Make sure 'feedback' is the correct table name
        .insert([
            { name: name, email: email, message: message }
        ]);

    if (error) {
        console.error('Error storing feedback:', error);
    } else {
        console.log('Feedback stored:', data);
    }
}

// Example usage
storeFeedback('John Doe', 'john.doe@example.com', 'This is a feedback message.');

async function getFeedback() {
    const { data, error } = await supabase
        .from('feedback')  // Make sure 'feedback' is the correct table name
        .select('*');

    if (error) {
        console.error('Error fetching feedback:', error);
    } else {
        console.log('Fetched feedback:', data);
    }
}



