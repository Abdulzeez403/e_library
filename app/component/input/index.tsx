import { Input } from "@/components/ui/input"

interface IProps {
    type: string;
    placeholder: string
    icon: React.ReactNode
}

export function InputSearchComponent({ type, placeholder, icon }: IProps) {
    return (
        <div className="flex gap-x-2  items-center  w-96 border-2 rounded-lg ">
            <Input type={type} placeholder={placeholder} className="outline-0 border-0" />
            <div className="px-2">
                {icon}

            </div>

        </div>
    )
}
