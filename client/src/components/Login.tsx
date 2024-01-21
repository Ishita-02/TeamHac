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

export function Login() {
  return (
    <Card className="w-[400px] h-[350px]">
      <CardHeader>
        <CardTitle className="gap-y-10">Login</CardTitle>
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
      <CardFooter className="justify-center">
        <Button className="place-items-center w-1/2">Login</Button>
      </CardFooter>
    </Card>
  )
}

export default Login
