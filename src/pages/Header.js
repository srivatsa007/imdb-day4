const Header = () => {
    return (
        <header className='p-4 md:p-8 flex align-middle justify-center gap-8'>
            <a href="#" >
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbrand.imdb.com%2Fimdb&psig=AOvVaw12mjHhkd05c9LcvvPfH3Go&ust=1703263517840000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKiqjJr9oIMDFQAAAAAdAAAAABAQ" alt="" />
            </a>
            <h1 className='mb-6 text-4xl font-bold text-center md:text-5xl font-patrick'>
				imDB Top Movies
			</h1>
        </header>
    )
}

export default Header