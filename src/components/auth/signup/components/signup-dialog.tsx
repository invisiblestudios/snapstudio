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
import SignupForm from './signup-form';

function SignupDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Signup</Button>
      </DialogTrigger>

      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Signup - {APP_NAME}</DialogTitle>
        </DialogHeader>

        <SignupForm />
      </DialogContent>
    </Dialog>
  );
}

export default SignupDialog;
