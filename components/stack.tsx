
export default function Stack(){
    return(
        <div className="w-full flex flex-col pl-20 lg:pl-0 items-start md:grid grid-cols-3 p-5">
            <div className="stack">
                <h1 className="stack-title">Languages</h1>
                <ul className="stack-item">
                    <li>
                        TypeScript
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        SQL
                    </li>
                </ul>
            </div>
            <div className="stack">
                <h1 className="stack-title">Frameworks</h1>
                <ul className="stack-item">
                    <li>
                        React
                    </li>
                    <li>
                        Next.js
                    </li>
                    <li>
                        Express.js
                    </li>
                    <li>
                        Tailwind CSS
                    </li>
                </ul>
            </div>
            <div className="stack">
                <h1 className="stack-title"> Tools & Platforms</h1>
                <ul className="stack-item">
                    <li>
                        Node.js
                    </li>
                    <li>
                        PostgreSQL
                    </li>
                    <li>
                        Git
                    </li>
                    <li>
                        Cloudinary
                    </li>
                    <li>
                        Drizzle
                    </li>
                </ul>
            </div>
        </div>
    )
}