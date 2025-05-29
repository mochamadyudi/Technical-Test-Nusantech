import React, {useEffect} from 'react';
import LottiesMolecul from "../../../../components/molecul/lotties.molecul.tsx";
import Animation from '../../../../assets/lotties/verified.json'
import TheContainer from "../../../../components/layouts/TheContainer.tsx";
import {Typography} from "antd";
import {useDispatch} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {CreateSession} from "../../../../redux/actions/auth.ts";
const Page: React.FC = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if(searchParams.has('request_token')){
      dispatch(CreateSession({ request_token: searchParams.get('request_token') as string }))
    }
  }, []);
  return (
    <React.Fragment>
      <TheContainer className="flex-1 flex items-center flex-col justify-center">
        <LottiesMolecul
          width={400}
          height={400}
          animation={Animation}
        />
        <Typography.Title level={1}>Approved</Typography.Title>
      </TheContainer>
    </React.Fragment>
  )
};

export default Page;
