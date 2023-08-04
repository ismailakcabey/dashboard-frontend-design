import { Col, Input, Row, Select, SelectProps, Space } from "antd"
import { useEffect, useState } from "react";
import Step1 from "../../components/campainStep1";
import Step2 from "../../components/campainStep2";
import Step3 from "../../components/campainStep3";

interface ItemProps {
    label: string;
    value: string;
  }

const Campains = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  useEffect(() => {
  }, [isMobile]);
    const options: ItemProps[] = [];
    for (let i = 10; i < 36; i++) {
        const value = i.toString(36) + i;
        options.push({
          label: `Long Label: ${value}`,
          value,
        });
      }
      const [value, setValue] = useState(['a10', 'c12', 'h17', 'j19', 'k20']);
      const selectProps: SelectProps = {
        mode: 'multiple',
        style: { width: isMobile ? 'auto' : '300px', height: '35px' },
        value,
        options,
        onChange: (newValue: string[]) => {
          setValue(newValue);
        },
        placeholder: 'Select Item...',
        maxTagCount: 'responsive',
      };
    return(
        <>
        <div style={{color:'#1C2A53',fontSize:24,fontWeight:500}}>
        Create New Campaign
        </div>
        <div style={{backgroundColor:'white',borderRadius:"12px", padding:"8px",margin:"5px"}}>
            <Col>
            <Step1/>
            <Step2/>
            <Step3/>
            </Col>
        </div>
        </>
    )
}

export default Campains