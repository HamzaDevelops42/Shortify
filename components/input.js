import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputWithLabel(props) {
  return (
    <div className="grid w-full max-w-sm items-center gap-2">
      <Label htmlFor="email">{props.label}</Label>
      <Input type="email" id="email" placeholder={props.placeholder} {...props}/>
    </div>
  )
}
