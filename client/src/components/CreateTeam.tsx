import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export const createTeamSchema = z.object({
    hackathonName: z.string().min(2).max(50),
    teamName: z.string().min(2).max(50),
    modeOfHackathon: z.string().min(2).max(50),
    place: z.string().min(2).max(50),
    description: z.string().min(2).max(50),
    githubLink: z.string().min(2).max(100)
})

export function CreateTeam() {

    const form = useForm<z.infer<typeof createTeamSchema>>({
      resolver: zodResolver(createTeamSchema),
      defaultValues: {
        hackathonName: "Hackathon name",
        teamName: "Team name",
        modeOfHackathon: "Online",
        place: "Place",
        description: "Description",
        githubLink: "Github link"
    },
})

return (
    <Form {...form}>
      <h3 className="text-2xl font-bold text-center">Create Team</h3>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 justify-center mt-6">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="hackathonName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hackathon Name</FormLabel>
                <FormControl>
                  <Input placeholder="Hackathon Name" {...field} style={{ width: "200px" }} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="teamName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Team Name</FormLabel>
                <FormControl>
                  <Input placeholder="Team Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="modeOfHackathon"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mode of Hackathon</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the mode of Hackathon" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Online">Online</SelectItem>
                    <SelectItem value="Offline">Offline</SelectItem>
                    <SelectItem value="Both">Both</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="place"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Place</FormLabel>
                <FormControl>
                  <Input placeholder="Place" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input className="h-20" placeholder="Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="githubLink"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Github Link</FormLabel>
              <FormControl>
                <Input placeholder="Github Link" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Create Team</Button>
      </form>
    </Form>
  )

function onSubmit(values: z.infer<typeof createTeamSchema>) {
    // Logic to submit form to backend
    console.log(values)
  }
}