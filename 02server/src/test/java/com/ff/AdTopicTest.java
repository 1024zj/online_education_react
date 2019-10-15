package com.ff;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.ff.dao.AdTopicMapper;
import com.ff.dao.TopicMapper;
import com.ff.pojo.AdTopic;
import com.ff.pojo.Topic;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AdTopicTest {
	@Autowired
	private AdTopicMapper adTopicMapper;

	@Test
	public void adTopicsTest() {

		List<AdTopic> list = adTopicMapper.selectAdTopics();
		System.out.println(list.size());
	}
}