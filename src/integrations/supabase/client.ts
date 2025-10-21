import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://zoswbxajbckedqhrnhnr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpvc3dieGFqYmNrZWRxaHJuaG5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEwNDUzMjIsImV4cCI6MjA3NjYyMTMyMn0.NIhR9Y-guJMuX3A5ZQrZH2RMZQQZPzgsdTywgLg1pC0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
