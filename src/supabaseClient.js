// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://lnyvzngtaettkbokvdgd.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxueXZ6bmd0YWV0dGtib2t2ZGdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExMDIzODcsImV4cCI6MjA2NjY3ODM4N30.a350yjW7TcA1sDf2gtEoaf57u1KTdcFW1yMPKVzOpm8';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
