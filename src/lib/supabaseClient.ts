
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://wtntveelppnvinapcyiq.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0bnR2ZWVscHBudmluYXBjeWlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwNDg1NjYsImV4cCI6MjA1NDYyNDU2Nn0.7bQDU5KuNebYZPfDyffFapmYGZ_Gs8NDT_uKsjaqEmc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
