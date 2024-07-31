'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { APP_NAME } from '@/lib/constants';
import LoginForm from './login-form';

function LoginDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Login</Button>
      </DialogTrigger>

      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Login - {APP_NAME}</DialogTitle>
        </DialogHeader>

        <LoginForm />
      </DialogContent>
    </Dialog>
  );
}

export default LoginDialog;
