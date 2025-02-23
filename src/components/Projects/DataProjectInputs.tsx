import ProjectCard from './ProjectCard'

function DataProjectInputs() {
  return (
    <div style={{  borderTop: "1px solid rgb(120, 120, 120, .2)" }}>
      
      <a href="https://github.com/ddavidjeong" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <ProjectCard
            title="Transformer-based LLM"
            descriptions={[
              "a LLM that evaluates accuracy of news article headlines relative to article content",
            ]}
            stack={["Python", "PyTorch", "Pandas", "Matplotlib"]}
          />
      </a>
      <a href="https://nbviewer.org/github/ddavidjeong/film_revenue_analysis/blob/main/box_office.ipynb" target="_blank" rel="noopener noreferrer" className="cursor-pointer ">
          <ProjectCard
            title="Film Revenue Analysis"
            descriptions={[
            "An analytical study to determine how to maximize profit when pitching a new film project"]}
            stack={["Python", "NumPy", "pandas", "seaborn", "Matplotlib", "seaborn"]}
          />
      </a>
      
      
      <a href="https://github.com/ddavidjeong/wine_quality" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <ProjectCard
            title="Modeling Wine Quality"
            descriptions={[
              "Comprehensive study to analyze how chemical compositions of wine samples influence quality scores"
            ]}
            stack={["R", "RStudio", "SQL"]}
          />
      </a>

      <a href="https://github.com/ddavidjeong/us_pollution_visualizations/tree/main" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <ProjectCard
            title="Visualizing Pollution Patterns Across U.S. Cities"
            descriptions={[
              "Using D3 to visualize city pollution data across geographic and demographic landscapes",
            ]}
            stack={["Python", "Javascript", "D3.js"]}
          />
      </a>
      <a href="https://github.coecis.cornell.edu/jns226/project1" target="_blank" rel="noopener noreferrer" className="cursor-pointer ">
          <ProjectCard
            title="Film Revenue Analysis II"
            descriptions={[
            "A secondary group analysis for more in-depth data visualizations"]}
            stack={["Python", "HTML", "Javascript", "D3.js"]}
          />
      </a>

     

      
    </div>
  )
}

export default DataProjectInputs