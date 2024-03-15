type TextAlertProps = {
    alert: string;
}

export default function TextAlert({ alert }: TextAlertProps) {
    return (
        <div className="text-red-500">
            <span>{alert}</span>
        </div>
    )
}