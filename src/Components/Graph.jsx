import { ResponsivePie } from '@nivo/pie';

const Graph = (graphdata) => {
   
    const getRandomColor = () => {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    };
    const data = graphdata.data.map((item) => ({...item, color: getRandomColor()})); 
    
    return (
        
        
            <ResponsivePie
                data={data}
                margin={{ top: 10, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                colors={({ data }) => data.color}
                borderWidth={1}
                borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
                arcLabel={(d) => `${d.data.city} (${d.value}%)`}
                enableArcLinkLabels={false}
            />
       
    );
};

export default Graph;