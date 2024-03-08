import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogFooter,
  DialogHeader,
} from "@radix-ui/react-dialog";

export function SignOutModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const signOutHandle = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      localStorage.removeItem("auth");
      closeModal();
    } catch (error) {
      console.error("Sign out error:", error.message);
    }
  };

  return (
    <>
      <Dialog isOpen={isOpen} onDismiss={closeModal}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Sign Out</DialogTitle>
            <DialogDescription>
              Are you sure you want to sign out?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={closeModal} variant="outline">
              Cancel
            </Button>
            <Button onClick={signOutHandle}>Sign Out</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Button onClick={openModal} variant="outline">
        Sign Out
      </Button>
    </>
  );
}
