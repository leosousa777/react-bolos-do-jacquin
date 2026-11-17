import { useState } from 'react';
import './Dialog.css'
import { Button, Modal } from 'react-bootstrap';

type DialogProps = {
title?: string;
mostrar: boolean;
mensagem: string;
textoConfimar: string;
textoCancelar: string;
aoFechar: () => void;
aoConfirmar: () => void; 
}

function Dialog({
  title,
   mostrar, 
   mensagem = "Esta é uma mensagem padrao",
  textoConfimar = "Confirmar" , 
  textoCancelar = "Cancelar", 
  aoFechar, 
  aoConfirmar} : DialogProps){
  
    return(
        <>
<Modal show={mostrar} onMide={aoFechar} centered>
<Modal.Header closeButton>
<Modal.Title>{title ? title : "Texto padrao"}</Modal.Title>
</Modal.Header>
<Modal.Body>{mensagem}</Modal.Body>
<Modal.Footer>
  <Button variant="secondery" onClick={aoFechar}>
{textoCancelar}
  </Button>
  <Button variant='primary' onClick={aoConfirmar}>
{textoConfimar}
  </Button>
</Modal.Footer>
</Modal>

        </>

    )
}

export default Dialog;