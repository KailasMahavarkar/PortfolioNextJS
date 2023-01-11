import Image from 'next/image';

const Author = ({ author }) => (
    <div className="relative p-12 mt-20 mb-8 text-center bg-opacity-30">
        <div className="absolute left-0 right-0 -top-14">
            <Image
                unoptimized
                alt={author.name}
                height="100px"
                width="100px"
                className="align-middle rounded-full"
                src={author.photo.url}
            />
        </div>
        <h3 className="mt-4 mb-4 text-xl font-bold">
            {author.name}
        </h3>
        <p className="text-ls">{author.bio}</p>
    </div>
);

export default Author;


import chalk from "npm:chalk@5";
console.log(chalk.green("Hello!"));