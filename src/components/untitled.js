import selectExpensesTotal from '../selectors/expenses-total';

const expenses = [{
    id:'1',
    description: 'Gum',
    note : '',
    amount: 195,
    createdAt: 0
},{
    id:'2',
    description:'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4,'days').valueOf()
},{
    id:'3',
    description:'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).subtract(4,'days').valueOf()
}];

const total = getExpensesTotal(expenses);
console.log(total);