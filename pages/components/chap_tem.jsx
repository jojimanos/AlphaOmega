import Link from 'next/link'

function Chapmath_tem (props) {
    
    const {chapsets} = props

    const {title_1, title_2, link_1} = chapsets
        
    return (
            <div className='text-center m-3 font-serif'>
                <Link href={link_1}>
                    <div>
                    <p className='text-3xl whitespace-pre'>1 {title_1}</p>
                    <p className='text-3xl whitespace-pre'>2 {title_2}</p>
                    </div>                
                </Link>
            </div>
        );
    }
 
export default Chapmath_tem;