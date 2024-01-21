import { Button } from "@/components/ui/button"
import {  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export function Signup() {

  return (
    <div className="flex justify-center items-center h-screen ">
      <Card className="w-[400px] h-[450px]  justify-center">
      <CardHeader>
        <CardTitle>Signup</CardTitle>
        <CardDescription>Make a new account</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="name" placeholder="Enter your Email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Password</Label>
              <Input id="name" placeholder="Enter your Password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-1.5">
        <Button className="w-60">Signup</Button>
        <div className="relative bottom-0 left-0">
          <CardDescription className="ml-4 p-10">Already have an account?</CardDescription>
          <Button variant="outline" className="ml-2">Login</Button>
        </div>
      </CardFooter>
    </Card>
    </div>
  )
}

export default Signup
