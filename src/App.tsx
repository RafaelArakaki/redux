
import { useDispatch, useSelector } from 'react-redux';

import {
  updateName,
  updateAge,
  updateGender,
  updateHeight,
  updateWeight,
  updateNationality
} from './redux/slices/userSlice';
import { clearAll } from './redux/slices/clear';
import { RootDispatch, RootState } from './redux/store/mainStore';

import {
  EditOutlined,
  UserOutlined,
} from '@ant-design/icons';

import {
  Row,
  Col,
  Input,
  InputNumber,
  Button
} from 'antd';

import styles from './styles.module.css';

function App() {
  const dispatch: RootDispatch = useDispatch();

  const userName = useSelector((state: RootState) => state.user.userProfile.name);
  const userAge = useSelector((state: RootState) => state.user.userProfile.age);
  const userGender = useSelector((state: RootState) => state.user.userProfile.gender);
  const userHeight = useSelector((state: RootState) => state.user.userProfile.height);
  const userWeight = useSelector((state: RootState) => state.user.userProfile.weight);
  const userNationality = useSelector((state: RootState) => state.user.userProfile.nationality);

  return (
    <div className={styles.container}>      
      <Row gutter={[15, 15]} justify="start">
        <Col md={12}>
          <div className={styles.card}>
            <div className={styles.pd_20}>
              <h2><EditOutlined /> Editar usuário</h2>
              <Input
                className={styles.input_form}
                placeholder='Nome'
                onChange={(e) => dispatch(updateName(e.target.value))}
              />
              <InputNumber
                className={styles.input_form}
                type='number'
                placeholder='Idade'
                min={0}
                onChange={(e) => dispatch(updateAge(e as number))}
              />
             <Input
                className={styles.input_form}
                placeholder='Gênero'
                onChange={(e) => dispatch(updateGender(e.target.value))}
              />
              <InputNumber
                className={styles.input_form}
                placeholder='Altura'
                onChange={(e) => dispatch(updateHeight(e as number))}
              />
              <InputNumber
                className={styles.input_form}
                placeholder='Peso'
                onChange={(e) => dispatch(updateWeight(e as number))}
              />
              <Input
                className={styles.input_form}
                placeholder='Nacionalidade'
                onChange={(e) => dispatch(updateNationality(e.target.value))}
              />
              <Button
                type="primary"
                onClick={() => dispatch(clearAll())}
              >
                Limpar dados
              </Button>
            </div>            
          </div>            
        </Col>
        <Col md={12} className={styles.card}>
          <div className={styles.pd_20}>
            <h2><UserOutlined /> Dados do Usuário</h2>
            <p><strong>Nome:</strong> {userName}</p>
            <p><strong>Idade:</strong> {userAge}</p>
            <p><strong>Sexo:</strong> {userGender}</p>
            <p><strong>Altura:</strong> {userHeight}</p>
            <p><strong>Peso:</strong> {userWeight}</p>
            <p><strong>Nacionalidade:</strong> {userNationality}</p>
          </div>
        </Col>
      </Row>    
    </div>
  )
}

export default App
