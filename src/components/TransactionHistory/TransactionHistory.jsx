import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
//------------------------------------------------------//
export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.head}>
        <tr>
          <th className={css.row}>Type</th>
          <th className={css.row}>Amount</th>
          <th className={css.row}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={css.body}>
              <td className={css.row}>{type}</td>
              <td className={css.row}>{amount}</td>
              <td className={css.row}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
