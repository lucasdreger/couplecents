// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://wtntveelppnvinapcyiq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0bnR2ZWVscHBudmluYXBjeWlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwNDg1NjYsImV4cCI6MjA1NDYyNDU2Nn0.7bQDU5KuNebYZPfDyffFapmYGZ_Gs8NDT_uKsjaqEmc";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);