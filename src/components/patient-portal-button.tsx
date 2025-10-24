'use client';

import { useState } from 'react';
import { Button } from './button';

export function PatientPortalButton() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button type="button" onClick={() => setOpen(true)}>
        Criar cadastro
      </Button>
      {open ? (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 p-6">
          <div className="section-shadow max-w-md space-y-4 bg-white/10 p-8 text-center">
            <h3 className="text-2xl font-semibold text-foreground">Em breve — Portal Seguro</h3>
            <p className="text-sm text-foreground/70">
              Estamos finalizando um ambiente protegido para gestão de documentos, importações e comunicação com nossa equipe.
            </p>
            <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
              Fechar
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
