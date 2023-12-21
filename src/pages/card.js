import { MdOutlineMessage } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";

const Card = (arg) =>{
    return(
        
        <div className='relative overflow-hidden rounded-lg shadow-[10px_10px_100px_0px_rgba(0,0,0,0.40)] shadow-red-700'>
			
			<div className='flex h-[50rem] lg:h-96 lg:w-[80vw]'>
				<div className='z-20 flex flex-col justify-between h-full gap-8 p-8 lg:w-1/2'>
					<div className='flex flex-col gap-8 lg:flex-row'>
						<img src={arg.thumbnail} alt='movie poster' className='lg:h-56' />
						<div>
							<h2 className='text-2xl lg:text-3xl'>{arg.name}</h2>
							<p className='mb-2 text-blue-200 lg:text-lg'>
								{arg.year}
                                <br/> 
                                {arg.cast.map((abc, i)=> i===4 ? abc + '.' : abc + ', ' )}
							</p>
							<div className='flex items-center gap-4 mb-8 text-xs'>
								<p className='px-2 py-1 border border-white rounded-md'>
									{arg.duration}
								</p>
								<p className='text-sm text-blue-100'>
									{arg.genre.map((abc, i) =>
										i === arg.abc.length - 1 ? abc + '.' : abc + ', '
									)}
								</p>
							</div>
							<p className='text-sm text-white lg:text-base'>{arg.extract}</p>
						</div>
					</div>
					<div className='flex justify-center gap-12 text-gray-400 lg:justify-start'>
						<FaShareAlt className='transition ease-in-out delay-150 cursor-pointer hover:text-green-500' />
						<FaHandHoldingHeart className='transition ease-in-out delay-150 cursor-pointer hover: text-pink-400' />
						<MdOutlineMessage className='transition ease-in-out delay-150 cursor-pointer hover:text-blue-500' />
					</div>
				</div>
                <div>
                    <div className='hidden w-1/2 h-full bg-no-repeat bg-cover lg:inline-block bg-gradient-to-l from-opacity-0 via-opacity-75 to-opacity-100 relative'
					    style={{ backgroundImage: `url(${arg.thumbnail})`}} ></div>
                </div>
				
			</div>
            
		
		
        </div>
    )
}

export default Card
