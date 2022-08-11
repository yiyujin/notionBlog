import Layout from "../components/layout"
import {TOKEN, DATABASE_ID} from "../config"
import ProjectItem from "../components/project-item";

//projects를 넘게 받고, 파싱해서 쓰기
export default function Projects({projects}){
    // console.log(projects.results)
    return(
        <>
            <Layout>
                <div className="flex flex-col place-items-center">
                    <h1 className="mb-4 font-bold">Total {projects.results.length}</h1>

                    {projects.results.map((aProject)=>(
                        <ProjectItem key={aProject.id} data={aProject}/> //1:55:54
                        )
                    )}
                </div>
            </Layout>
        </>
    )
}

//데이터 가져오기
export async function getStaticProps() {
	//여기에 노션 REQUEST 코드를 넣어준다
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Notion-Version': '2022-02-22',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            sorts: [
                {
                    "property" : "Created",
                    "direction" : "descending"
                }
            ],
            page_size: 100
        })
    };
    
    //데이터가 받아질 때까지 기다리기
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)

    //결과를 json으로 만들어봄
    const projects = await res.json()

    // console.log(projects)

  return {
    props: {projects}, // will be passed to the page component as props
  }
}