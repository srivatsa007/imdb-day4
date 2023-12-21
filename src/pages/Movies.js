import Card from './card'
import moviearray from './List.json'

let Movies =() => {
    return(
        
            <main className='grid items-center justify-center grid-cols-1 gap-16 p-4 md:grid-cols-2 lg:grid-cols-none md:p-8'>
				{
				moviearray.map((item) => 
					<Card
					name={item.name}
					thumbnail={item.thumbnail}
					duration={item.duration}
					year={item.year}
					genre={item.genre}
					extract={item.extract}
                    cast= {item.cast}
					
				/>
				)}
		</main>
        
    )
}
export default Movies