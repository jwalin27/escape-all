import { render, screen, fireEvent } from '@testing-library/react';
import { Button, Card, Input, Modal, Navbar, NavbarInner } from '../index';
import React from 'react';

it('renders Button and handles click', () => {
  const onClick = vi.fn();
  render(<Button onClick={onClick}>Press</Button>);
  fireEvent.click(screen.getByText('Press'));
  expect(onClick).toHaveBeenCalled();
});

it('renders Card content', () => {
  render(
    <Card>
      <div>Card content</div>
    </Card>
  );
  expect(screen.getByText('Card content')).toBeInTheDocument();
});

it('renders Input with value', () => {
  render(<Input defaultValue="hello" />);
  expect(screen.getByDisplayValue('hello')).toBeInTheDocument();
});

it('renders Modal when open', () => {
  const onClose = vi.fn();
  render(
    <Modal open onClose={onClose}>
      <div>Modal body</div>
    </Modal>
  );
  expect(screen.getByText('Modal body')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Close' }));
  expect(onClose).toHaveBeenCalled();
});

it('renders Navbar structure', () => {
  render(
    <Navbar>
      <NavbarInner>
        <div>Brand</div>
      </NavbarInner>
    </Navbar>
  );
  expect(screen.getByText('Brand')).toBeInTheDocument();
});
