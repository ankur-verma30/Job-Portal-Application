
import { Carousel } from '@mantine/carousel';
import { jobCategory } from '../Data/Data';

const JobCategory = () => {
    return (
        <div className="mt-20 pb-5">
            <div className="text-4xl text-center font-semibold text-mine-shaft-100 mb-3">
                Browse <span className="text-bright-sun-400">Job</span> Category
            </div>
            <div className="text-lg text-mine-shaft-300 text-center w-1/2 mx-auto">
                Explore diverse job opportunities tailored to your skills and interests. Start your career journey with today!
            </div>

            <Carousel
                slideSize="22%"
                slideGap="md"
                emblaOptions={{
                    loop: true,
                    dragFree: false,
                    align: 'center',
                }}
            >
                {jobCategory.map((category, index) => (
                    <Carousel.Slide key={index}>
                        <div className="flex flex-col items-center w-64">
                            <div className="p-2 bg-bright-sun-300 rounded-full">
                                <img
                                    className="h-8 w-8"
                                    src={`/JobPortalResources/Category/${category.name}.png`}
                                    alt={category.name}
                                />
                            </div>
                            <div className="text-mine-shaft-100 text-xl font-semibold">
                                {category.name}
                            </div>
                            <div className="text-sm text-center text-mine-shaft-300">
                                {category.desc}
                            </div>
                            <div className="text-bright-sun-300 text-lg">
                                {category.jobs}+ new Jobs Posted
                            </div>
                        </div>
                    </Carousel.Slide>
                ))}
            </Carousel>
        </div>
    );
};

export default JobCategory;
