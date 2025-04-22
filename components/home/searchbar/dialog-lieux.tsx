import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Props{
    handleDialogLieuxOpen:(value:boolean) => void;
    openDialogLieux:boolean
}

export default function DialogLieux({handleDialogLieuxOpen,openDialogLieux}:Props) {
  return (
    <Dialog onOpenChange={handleDialogLieuxOpen} >
      <DialogTrigger className="m-10" asChild>
                      <Button type="submit">Appliquer</Button>
        
        {/* <Button variant="outline">Afficher</Button> */}
      </DialogTrigger>
      <DialogContent className="dialog-lieux sm:max-w-[425px]] w-full">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <h1>tttttttttt</h1>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <h1>tttttttttt</h1>
          </div>
        </div>
        <DialogFooter>
            <h3>footerrrrrrrr</h3>
          {/* <Button type="submit">Save changes</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
