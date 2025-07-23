import Image from "next/image"
import avatar from "../../../public/avatar.jpg";

const About = () => {
  return (
    <section className="container m-auto">
      <h1 className="text-3xl font-bold text-gray-800 p-5">About Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit quod excepturi, quos officiis nam soluta illo dignissimos neque enim possimus? Distinctio officia possimus qui nulla ipsam sunt, aut maiores accusantium sapiente rem aspernatur quibusdam expedita incidunt quam dolorum hic impedit iure. Quis sequi at unde necessitatibus obcaecati neque ipsa?</p>
      <div>
        <Image 
          src={avatar}
          alt="Avatar"
          className="rounded-full" 
          width={150}
          height={150}
          priority
          />
      </div>
    </section>
  )
}

export default About