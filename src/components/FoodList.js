import React,{Component} from 'react';
import FoodItem from './FoodItem.js'

class FoodList extends Component{

  render(){
    let foodList = this.props.foodList;
    foodList = foodList.map((food,indx) => {
      return <FoodItem key={indx} food={food} />
    })
    return(
      <div>
        <ul>
          {foodList}
        </ul>
      </div>
    )
  }
}

export default FoodList ;
