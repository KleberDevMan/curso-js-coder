import Link from "next/link";

export default function Navegador(props) {
  return (
    <div style={
      { backgroundColor: props.color ?? props.theme.colors.primary,
        margin: '10px 0',
        borderRadius: '10px',
        padding: '0 30px',
        cursor: 'pointer',
      }
    }>
      <Link href={props.href}>
        <h3>{props.title}</h3>
      </Link>
    </div>
  )
}
