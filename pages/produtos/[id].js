import {useRouter} from 'node:router';

function Produtos(){
    const router = useRouter();
    const id = router.query.id;
}

export default Produtos;