'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
export default function CRM() {
  const [clients, setClients] = useState([]);
  const [form, setForm] = useState({ nom:'', entreprise:'', email:'', telephone:'', notes:'' });
  async function charger(){ const {data}=await supabase.from('clients').select('*'); setClients(data||[]); }
  async function ajouter(){ if(!form.nom)return; await supabase.from('clients').insert(form); setForm({nom:'',entreprise:'',email:'',telephone:'',notes:''}); charger(); }
  useEffect(()=>{ charger(); },[]);
  return (<div><h1>CRM Cloud</h1></div>);
}