import React, { FormEvent, FormEventHandler, MouseEvent, MouseEventHandler } from 'react';
import { Button, Form, Modal, ModalDialog, ModalProps } from 'react-bootstrap';

interface SheetModalProps extends ModalProps {
    title: string;
    children?: React.ReactElement;
    applyButton?: {
        name: string;
        onApply(ev: MouseEvent | FormEvent | undefined): MouseEventHandler | FormEventHandler | void;
        disabled?: boolean;
    };
}

export default function SheetModal(props: SheetModalProps) {
    function apply(ev: MouseEvent | FormEvent) {
        if (props.onHide) props.onHide();
        props.applyButton?.onApply(ev);
    }

    function submit(ev: FormEvent<HTMLFormElement>) {
        ev.preventDefault();
        apply(ev);
    }

    return (

        <Modal animation={props.animation} autoFocus={props.autoFocus} backdrop={props.backdrop} centered={props.centered}
            fullscreen={props.fullscreen} keyboard={props.keyboard} onEnter={props.onEnter} onEntered={props.onEntered}
            onEntering={props.onEntering} onEscapeKeyDown={props.onEscapeKeyDown} onExit={props.onExit} onExited={props.onExited}
            onExiting={props.onExiting} onHide={props.onHide} onShow={props.onShow} scrollable={props.scrollable} show={props.show}
            size={props.size}>
            <Modal.Header>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Form onSubmit={submit} style={{ display: 'contents' }}>
                <Modal.Body>
                    {props.children}
                </Modal.Body>
                <Modal.Footer>
                    {props.applyButton &&
                        <Button type='submit' variant='primary' disabled={props.applyButton.disabled}>
                            {props.applyButton.name}
                        </Button>
                    }
                    <Button variant='secondary' onClick={props.onHide}>Fechar</Button>
                </Modal.Footer>
            </Form>
        </Modal >
    );
}