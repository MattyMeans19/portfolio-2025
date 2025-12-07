import Link from "next/link";


export default function Billboard(){
    return(
        <div className="w-full flex flex-col gap-20 md:gap-0 md:grid grid-cols-2 bg-white rounded-2xl p-5 boxShadow">
              <p className="border-b-2 md:p-15 md:border-b-0 md:text-3xl text-center place-content-center">
                  Like what you see and ready to place your project in my capable hands?
                  Head on over to the <Link href="#"><strong className="boldText-secondary">Contact</strong></Link> page
                  to send me an email with all the information I'll need to build you a fabulous webpage!
                  If you're still not sure what you'll need feel free to still contact me with any questions you have!
              </p>
              <div className="text-center flex flex-col">
                  <span className="md:text-3xl underline">Curious about what's under the hood?</span>
                  <span className="md:text-2xl">Follow these links and click the Github Repo url to inspect what makes these wonderful sites work !</span>
                  <ul className="grid grid-cols-2 gap-2 md:text-2xl">
                      <li>
                          <Link href="/enterprise/Frontend/TailwindCSS" className="p-5 flex flex-col text-center bg-white hover:bg-gray-400/10 rounded-2xl border-b-2 size-full place-self-center">
                          <strong className="boldText-primary">TailwindCSS: </strong>
                          Framework for styling, themes, and layout
                          </Link>
                      </li>
                      <li>
                          <Link href="/enterprise/Frontend/React" className="p-5 flex flex-col text-center bg-white hover:bg-gray-400/10 rounded-2xl border-b-2 size-full place-self-center">
                          <strong className="boldText-primary">React: </strong>
                          Front-End framework for UI/UX
                          </Link>
                      </li>
                      <li>
                          <Link href="/enterprise/Misc/Next.JS" className="p-5 flex flex-col text-center bg-white hover:bg-gray-400/10 rounded-2xl border-b-2 size-full place-self-center">
                          <strong className="boldText-primary">Next.JS: </strong>
                          Framework that adds on to React for various features
                          </Link>
                      </li>
                      <li>
                          <Link href="/enterprise/Backend/Express.JS" className="p-5 flex flex-col text-center bg-white hover:bg-gray-400/10 rounded-2xl border-b-2 size-full place-self-center">
                          <strong className="boldText-primary">Express.JS: </strong>
                          Back-end framework for fetching data
                          </Link>
                        </li>
                      <li>
                          <Link href="/enterprise/Backend/PostgreSQL" className="p-5 flex flex-col text-center bg-white hover:bg-gray-400/10 rounded-2xl border-b-2 size-full place-self-center">
                          <strong className="boldText-primary">PostgreSQL</strong>
                          Database management for storing data
                          </Link>
                      </li>
                      <li>
                          <Link href="/enterprise/Misc/TypeScript" className="p-5 flex flex-col text-center bg-white hover:bg-gray-400/10 rounded-2xl border-b-2 size-full place-self-center">
                          <strong className="boldText-primary">TypeScript</strong>
                          Built-in error checking
                          </Link>
                      </li>
                  </ul>
              </div>
        </div>
    )
}