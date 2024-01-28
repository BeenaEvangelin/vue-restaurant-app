<template>
  <div class="views">
    <h1 class="heading">What Our Customers Say</h1>
    <div class="all-cards">
      <ul v-for="review in reviews" :key="review.id">
        <div class="card">
          <div class="title">{{ review.title }}</div>
          <p class="content">{{ review.content }}</p>
          <div class="person">
            <img :src="review.srcImg" class="img" />
            <div class="info">
              <div>{{ review.name }}</div>
              <p>{{ review.place }}</p>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import review1 from "../../../assets/review1.svg";
import review2 from "../../../assets/review2.svg";
import review3 from "../../../assets/review3.svg";

export default {
  name: "CustomerReviews",
  data() {
    return {
      reviews: [
        {
          srcImg: review1,
          title: "“The best restaurant”",
          name: "Sophire Robson",
          place: "Los Angeles, CA",
          content:
            "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
        },
        {
          srcImg: review2,
          title: "“Simply delicious”",
          name: "Matt Cannon",
          place: "San Diego, CA",
          content:
            "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
        },
        {
          srcImg: review3,
          title: "“One of a kind restaurant”",
          name: "Andy Smith",
          place: "San Francisco, CA",
          content:
            "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
        },
      ],
    };
  },
};
</script>
<style scoped>
.views {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.heading {
  color: var(--Neutral-07, #2c2f24);
  text-align: center;
  font-family: Playfair Display;
  font-size: 55px;
  font-style: normal;
  font-weight: 500;
  line-height: 60.5px;
}

.title {
  color: #ad343e;
  text-align: left;
  font-family: DM Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.72px;
}
.all-cards {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1600px;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  width: 416px;
  height: 408px;
  flex-shrink: 0;
  border-radius: 12px;
  background: var(--Neutral-02, #f9f9f7);
}

.img {
  width: 80px;
  height: 80px;
  border-radius: 12px;
}
.person {
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-top: 4rem;
}

.content {
  text-align: left;
  color: var(--Neutral-06, #414536);
  font-family: DM Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
}
.info {
  display: flex;
  margin-left: 20px;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  color: var(--Neutral-07, #2c2f24);
  font-family: DM Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
}
</style>
