import bcrypt from 'bcrypt';

async function hashPassword(password) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}
import { createClient } from '@supabase/supabase-js';


const supabase = createClient('https://uhwtfducivbbwgrgfurm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVod3RmZHVjaXZiYndncmdmdXJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0NDY5NTEsImV4cCI6MjA0MjAyMjk1MX0.trVnMR9_Ousr1AV3GH94nSRtTwjnhfzvuJ_pq9fG68g');

async function storeUser(username, password) {
    const hashedPassword = await hashPassword(password);

    const { data, error } = await supabase
        .from('users')
        .insert([{ username, password: hashedPassword }]);

    if (error) {
        console.error('Error storing user:', error.message);
    } else {
        console.log('User stored successfully:', data);
    }
}

// Example usage
storeUser('john_doe', 'securepassword123');
