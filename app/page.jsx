'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
export default function Page(){
  const [clients,setClients]=useState([]);
  const [form,setForm]=useState({nom:'',entreprise:'',email:'',telephone:'',notes:''});
  async function load(){ const {data}=await supabase.from('clients').select('*'); setClients(data||[]);} 
  async function add(){ if(!form.nom)return; await supabase.from('clients').insert(form); setForm({nom:'',entreprise:'',email:'',telephone:'',notes:''}); load(); }
  useEffect(()=>{load()},[]);
  return (<div><h1>CRM Cloud</h1><p>Votre CRM fonctionne !</p></div>);
}
