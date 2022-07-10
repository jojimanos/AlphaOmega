import Link from 'next/link'

function Chapmath_tem (props) {
    
    const {chapsets} = props

    const {title_1, link_1} = chapsets
        
    return (
            <div className='text-center m-3'>
                <Link href={link_1}>
                    <div>
                    <p className='text-3xl'>1 {title_1}</p>
                    </div>                
                </Link>
            </div>
        );
    }
 
export default Chapmath_tem;