import ProjectCard from './ProjectCard'

function DataProjectInputs() {
  return (
    <div style={{  borderTop: "1px solid rgb(120, 120, 120, .2)" }}>
        <a href="https://github.com/ddavidjeong" target="_blank" rel="noopener noreferrer" className="cursor-pointer ">
          <ProjectCard
            title="Film Marketing Data Analysis"
            descriptions={[
            "An analytical study to determine how to maximize profit when pitching a new film project"]}
            stack={["Python", "Pandas", "scikit-learn", "seaborn"]}
          />
      </a>
      <a href="https://github.com/ddavidjeong" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <ProjectCard
            title="Transformer-based LLM"
            descriptions={[
              "a LLM that evaluates accuracy of news article headlines relative to article content",
            ]}
            stack={["Python", "PyTorch", "Pandas", "Matplotlib"]}
          />
      </a>

      <a href="https://github.com/ddavidjeong" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <ProjectCard
            title="Language Detector"
            descriptions={[
              "Worked on a language detection feature for a language translation application",
            ]}
            stack={["Python", "NumPy", "scikit-learn"]}
          />
      </a>


      <a href="https://github.com/ddavidjeong" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <ProjectCard
            title="Automated File Organizer"
            descriptions={[
              "Automated user file organization using file metadata analysis. Toying with S3 buckets, DynamoDB, and Lambda functions.",
            ]}
            stack={["Python", "D3.js","S3", "DynamoDB", "Lambdas"]}
          />
      </a>
   
      
    </div>
  )
}

export default DataProjectInputs