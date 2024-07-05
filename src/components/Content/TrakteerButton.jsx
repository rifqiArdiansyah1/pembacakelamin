const TrakteerButton = () => {
    return (
        <a
            href="https://trakteer.id/shenzennn/tip"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-white p-2 rounded-3xl transform transition-transform duration-300 
            hover:scale-105 hover:bg-red-600 flex items-center mt-4"
        >
            <img 
                src="https://cdn.trakteer.id/images/embed/trbtn-icon.png"
                alt="Trakteer Logo"
                className="w-3.5 h-5 mr-2 object-containt animate-bounce"
            />
            Trakteer Peramal
        </a>
    );
};

export default TrakteerButton;
