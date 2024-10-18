import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
    const [login, setLogin] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5173/api/messages')
        .then((res) => res.json())
        .then((data) => setMessages(data))
        .catch((err) => console.log(err));
    }, []);
    const submitHandler = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        form.reset();
    
        try {
          const response = await axios.post('/api/messages', data);
          const newMessage = response.data;
          setMessages((prev) => [newMessage, ...prev]);
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Сюда почту свою электронную введи</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Отвечаю, что никому не передадим ее
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль свой введи</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Погнали!
      </Button>
    </Form>
  );
}

export default BasicExample;